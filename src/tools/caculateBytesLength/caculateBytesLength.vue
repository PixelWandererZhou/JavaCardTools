<script setup lang="ts">
import { caculateBytesLength } from './caculateBytesLength.models';

const inputText = ref('');
const hexFromText = computed(() => caculateBytesLength(inputText.value));
</script>

<template>
  <c-card title="计算十六进制字节长度">
    <c-input-text v-model:value="inputText" multiline placeholder="输入文本" label="文本" autosize autofocus raw-text test-id="text-to-binary-input" />
    <c-input-text v-model:value="hexFromText" label="ASCII十六进制" multiline raw-text readonly mt-2 placeholder="转换后的ASCII十六进制" test-id="text-to-binary-output" />
  </c-card>
</template>
