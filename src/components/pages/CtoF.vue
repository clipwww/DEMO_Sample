<template>
  <div class="container">
    <br/>
    <md-card>
        <md-card-header>
            <!-- 切換模式按鈕 -->
            <md-switch v-model="isCelsius" id="isCelsius" name="isCelsius" class="md-primary"></md-switch>
            <label for="isCelsius">
                {{ $t("Switch") }}：{{ $t(toggleTemperature) }}
            </label>
        </md-card-header>

        <md-card-actions>

        </md-card-actions>

        <md-card-content>
            <md-input-container>
                <label v-if="!isCelsius" class="label-text">{{ $t('Celsius') }}（°C）</label>
                <label v-if="isCelsius" class="label-text">{{ $t('Fahrenheit') }}（°F）</label>
                <md-input v-model="userInput"></md-input>
            </md-input-container>
            <h2 v-show="isCelsius">{{ $t('Celsius') }}：<br/>{{ celsius }} °C</h2>
            <h2 v-show="!isCelsius">{{ $t('Fahrenheit') }}：<br/>{{ fahrenheit }} °F</h2>
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
                return this.isCelsius ? "Celsius_To_Fahrenheit " : "Fahrenheit_To_Celsius";
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