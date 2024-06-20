<script setup lang="ts">
import { convertAsciiHexToText, convertTextToAsciiHex } from './ascii-to-hex.models';
import { useCopy } from '@/composable/copy';
import { isNotThrowing } from '@/utils/boolean';

const inputText = ref('');
const hexFromText = computed(() => convertTextToAsciiHex(inputText.value));
const { copy: copyBinary } = useCopy({ source: hexFromText });

const inputHex = ref('');
const textFromHex = computed(() => convertAsciiHexToText(inputHex.value));
const inputHexValidationRules = [
  {
    validator: (value: string) => isNotThrowing(() => convertAsciiHexToText(value)),
    message: '格式错误：应该是ASCII十六进制字符串，且长度是8的倍数',
  },
];
const { copy: copyText } = useCopy({ source: textFromHex });
</script>

<template>
  <c-card title="文本 转 ASCII十六进制">
    <c-input-text v-model:value="inputText" multiline placeholder="输入文本" label="文本" autosize autofocus raw-text test-id="text-to-binary-input" />
    <c-input-text v-model:value="hexFromText" label="ASCII十六进制" multiline raw-text readonly mt-2 placeholder="转换后的ASCII十六进制" test-id="text-to-binary-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!hexFromText" @click="copyBinary()">
        复制到剪贴板
      </c-button>
    </div>
  </c-card>

  <c-card title="ASCII十六进制 转 文本">
    <c-input-text v-model:value="inputHex" multiline placeholder="输入ASCII十六进制，例：31323334" label="ASCII十六进制" autosize raw-text :validation-rules="inputHexValidationRules" test-id="binary-to-text-input" />
    <c-input-text v-model:value="textFromHex" label="文本" multiline raw-text readonly mt-2 placeholder="转换后的文本" test-id="binary-to-text-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!textFromHex" @click="copyText()">
        复制到剪贴板
      </c-button>
    </div>
  </c-card>
</template>
