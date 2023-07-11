<template>
  <button class="gen-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="gen-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level, type } = props;
    const classes = computed(() => {
      return {
        [`gen-theme-${theme}`]: theme,
        [`gen-size-${size}`]: size,
        [`gen-level-${level}`]: level,
        [`gen-type-${type}`]: type,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$green: #28a745;
$radius: 4px;
$red: red;
$grey: grey;
$secondary: #6c757d;
$warning: #ffc107;
$info: #0dcaf0;
$light: #f8f9fa;
.gen-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.gen-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.gen-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.gen-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gen-size-medium {
    font-size: 18px;
    height: 34px;
    padding: 0 10px;
  }
  &.gen-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.gen-type-dashed {
    border-style: dashed;
  }
  &.gen-theme-button {
    &.gen-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gen-level-secondary {
      background: $secondary;
      color: white;
      border-color: $secondary;
      &:hover,
      &:focus {
        background: darken($secondary, 10%);
        border-color: darken($secondary, 10%);
      }
    }
    &.gen-level-success {
      background: $green;
      color: white;
      border-color: $green;
      &:hover,
      &:focus {
        background: darken($green, 10%);
        border-color: darken($green, 10%);
      }
    }
    &.gen-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
    &.gen-level-warning {
      background: $warning;
      color: $color;
      border-color: $warning;
      &:hover,
      &:focus {
        background: darken($warning, 10%);
        border-color: darken($warning, 10%);
      }
    }
    &.gen-level-info {
      background: $info;
      color: $color;
      border-color: $info;
      &:hover,
      &:focus {
        background: darken($info, 10%);
        border-color: darken($info, 10%);
      }
    }
    &.gen-level-light {
      background: $light;
      color: $color;
      border-color: $light;
      &:hover,
      &:focus {
        background: darken($light, 10%);
        border-color: darken($light, 10%);
      }
    }
  }
  &.gen-theme-link {
    &.gen-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gen-theme-text {
    &.gen-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gen-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gen-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gen-theme-link,
  &.gen-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .gen-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gen-spin 1s infinite linear;
  }
}
@keyframes gen-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
