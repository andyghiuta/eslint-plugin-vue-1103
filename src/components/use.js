import {
  computed, ref, watch, onMounted,
} from 'vue';

const useSomething = () => {
  const r = ref(0);
  const c = computed(r, () => null);
  onMounted(() => {
    console.log(1, 2);
  });
  watch(c, () => null);
};

export { useSomething };
