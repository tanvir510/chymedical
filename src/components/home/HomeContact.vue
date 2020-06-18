<template>
  <div class="contact_area section_padding bg_white">
    <div class="container">
      <SectionHeading title="MAKE AN APPOINTMENT" subtitle="WHY WE DO" />
      <div class="contact_wrapper">
        <div class="contact_thumb">
          <img src="../../assets/images/contact/img-01.png" alt="women" />
        </div>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from "../reusable/SectionHeading";
import ContactForm from "../reusable/ContactForm";
export default {
  components: {
    SectionHeading,
    ContactForm
  }
};
</script>

<style lang="scss" scoped>
.contact_wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .contact_thumb {
    flex: 50%;
  }
}
</style>