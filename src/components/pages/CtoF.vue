<template>
  <div class="container">
    <br/>
    <md-card>
        <md-card-header>
            <!-- 切換模式按鈕 -->
            <md-switch v-model="isCelsius" id="isCelsius" name="isCelsius" class="md-primary"></md-switch>
            <label for="isCelsius">
                切換：{{ toggleTemperature }}
            </label>
        </md-card-header>

        <md-card-actions>

        </md-card-actions>

        <md-card-content>
            <md-input-container>
                <label v-if="!isCelsius" class="label-text">攝氏（°C）</label>
                <label v-if="isCelsius" class="label-text">華氏：（°F）</label>
                <md-input v-model="userInput"></md-input>
            </md-input-container>
            <h2 v-show="isCelsius">攝氏：{{ celsius }} °C</h2>
            <h2 v-show="!isCelsius">華氏：{{ fahrenheit }} °F</h2>
        </md-card-content>
    </md-card>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                isCelsius: false,
                userInput: 0
            }
        },
        computed: {
            fahrenheit() {
                return this.userInput * 9 / 5 + 32;
            },
            celsius() {
                return (this.userInput - 32) * 5 / 9;
            },
            toggleTemperature() {
                return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
            }
        },
        methodes: {
            temperatureConversio() {

            }
        }
    }
</script>

<style>
    .label-text {
        font-size: 15px !important;
    }
</style>