<template>
    <div class="container">
        <br/>
        <md-layout md-gutter>
            <md-layout>
                <md-input-container  style="margin:0; margin-bottom: 4px;">
                    <label>{{ $t('Add_Todo') }}</label>
                    <md-input
                        type="text" 
                        v-model="newTodo" 
                        :placeholder="$t('Add_Todo')"
                        @keyup.13="actionAddTodo"></md-input>
                </md-input-container>
            </md-layout>
            <md-layout>
                <md-button @click="actionAddTodo" class="md-raised md-primary">{{ $t('Add') }}</md-button>
            </md-layout>
        </md-layout>
        
        <h2>{{ $t('ToDo_List') }}</h2>
        <md-list>   
            <ToDoItem v-for="(todo, index) in todoList" :key="todo.key" :item="todo" v-on:openDialog="openDialog(todo.key)"></ToDoItem>
        </md-list>

        <md-divider></md-divider>

        <h2>{{ $t('Done_List') }}</h2>
        <md-list>
            <ToDoItem v-for="(todo, index) in doneList" :key="todo.key" :item="todo" v-on:openDialog="openDialog(todo.key)"></ToDoItem>
        </md-list>

        <CustomModal ref='dialog1'>
            <div slot="title">
               {{ $t('Delete_Msg') }}
            </div>
            <div slot="content">
                
            </div>
            <div slot="actions">
                <md-button class="md-primary" @click="closeDialog('dialog1', false)">{{ $t('Cancel') }}</md-button>
                <md-button class="md-warn" @click="closeDialog('dialog1', true)">{{ $t('Delete') }}</md-button>
            </div>
        </CustomModal>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import CustomModal from '../item/CustomModal.vue';
    import ToDoItem from '../item/ToDoItem.vue';

    export default {
        components: {
            CustomModal: CustomModal,
            ToDoItem: ToDoItem
        },
        data() {
            return {
                newTodo: '',
                deleteKey: '',
            }
        },
        computed: mapGetters({
            // 使用取 list 的函式，將資料存在 todos
            todoList: 'getTodo',
            doneList: 'getDone',
            AllState: 'getAllstate'
        }),
        methods: Object.assign({},
            mapActions(['addTodo']), {
                actionAddTodo() {
                    if (this.newTodo.trim() == "") {
                        return false;
                    }
                    this.addTodo(this.newTodo);
                    this.newTodo = '';
                },
                openDialog(key) {
                    this.deleteKey = key;
                },
                closeDialog(ref, bool) {
                    this.$refs[ref].closeDialog(ref);
                    if (bool) {
                        this.$store.dispatch('deleteTodo', this.deleteKey);
                        console.log("DELETE:" + this.deleteKey)
                    }
                }
            }
        )
    }
</script>