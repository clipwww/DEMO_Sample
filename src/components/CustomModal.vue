<template>
    <md-dialog id="dialog1" md-open-from="#custom" md-close-to="#custom" ref="dialog1">
        <md-dialog-title>
            <slot name="title">
                default title
            </slot>
        </md-dialog-title>

        <md-dialog-content>
            <slot name="content">
                default content
            </slot>
        </md-dialog-content>

        <md-dialog-actions>
            <slot name="actions">
                <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
                <md-button class="md-primary" @click="closeDialog('dialog1')">Ok</md-button>
            </slot>
        </md-dialog-actions>
    </md-dialog>
</template>

<script>
    export default {
        methods: {
            openDialog(ref) {
                this.$refs[ref].open();
            },
            closeDialog(ref) {
                this.$refs[ref].close();
            },
            onOpen() {
                console.log('Opened');
            },
            onClose(type) {
                console.log('Closed', type);
            }
        }
    }
</script>