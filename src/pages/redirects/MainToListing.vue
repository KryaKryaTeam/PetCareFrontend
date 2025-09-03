<script lang="ts" setup>
import router from '@/app/router/Index'
import { onMounted } from 'vue'

onMounted(() => {
  router.push('/listing/')
})
</script>
