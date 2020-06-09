<template>
  <div class="contraception_page">
    <PageHeader />
    <Upcoming />
  </div>
</template>

<script>
import PageHeader from "@/components/reusable/PageHeader";
import Upcoming from "@/components/reusable/Upcoming";
export default {
  components: {
    PageHeader,
    Upcoming
  }
};
</script>
