<template>
    <md-list-item>
         <md-layout>
            <div v-if="!updateMode">
                <md-checkbox :checked="item.done" v-model="item.done"  @change="toggleTodo( item.key )"></md-checkbox>
                <span style="top: -3px;position: relative;">{{ item.content }}</span>
            </div>
            <div v-if="updateMode">
                <md-input-container>
                    <md-input 
                    v-focus="updateMode"
                    placeholder="Edit Todo"
                    v-model="userInput"
                    ></md-input>
                </md-input-container>
            </div>
         </md-layout>

         <md-layout style="justify-content: flex-end;">
            <md-button v-if="!updateMode" @click="showEditMode" class="md-icon-button md-list-action">
                <md-icon class="md-primary">mode_edit</md-icon>
            </md-button>
            <md-button v-if="updateMode" @click="actionEdit" class="md-icon-button md-list-action">
                <md-icon class="md-primary">send</md-icon>
            </md-button>
            <md-button v-if="!updateMode" @click="openDialog('dialog1')" class="md-icon-button md-list-action">
                <md-icon class="md-primary">delete_forever</md-icon>
            </md-button>
         </md-layout>
    </md-list-item>
</template>

<script>
    import {
        mapActions
    } from 'vuex';

    export default {
        props: {
            item: Object
        },
        data() {
            return {
                updateMode: false,
                Key: this.item.key,
                userInput: this.item.content,
            }
        },
        /*
            此 directives 是參考作者的 code
            主要功能是切換模式之後 focus input 功能
            value 為 updateMode
            $nextTick 功能是：上個動作完成後，才執行裡面包含的程式。
            之後會寫一篇關於自訂：Vue Directive
        */
        directives: {
            focus(el, {
                value
            }, {
                context
            }) {
                if (value) {
                    context.$nextTick(() => {
                        el.focus();
                    })
                }
            }
        },
        methods: Object.assign({},
            mapActions(['updateTodo', 'toggleTodo', 'deleteTodo']), {
                openDialog(ref) {
                    this.$parent.$parent.$refs[ref].openDialog(ref);
                    this.$emit('openDialog');
                },
                showEditMode() {
                    this.updateMode = true;
                },
                actionEdit() {
                    const userChange = this.userInput.trim();
                    console.log('userChange', this.item.key, userChange);
                    this.updateTodo({
                        key: this.item.key,
                        change: userChange
                    });
                    this.updateMode = false;
                },
                cancelEdit() {
                    this.userInput = this.item.content;
                    this.updateMode = false;
                }
            }
        )
    }
</script>