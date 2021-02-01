<template>
  <div class="footer-form-wrap col-br-top col-br-top-end col-br-d row">
    <div class="footer-form-inner col-tablet-s-6 col-tablet-4 off-tablet-2 col-mob-10">
      <Title
        element="h3"
        :class="[
          'footer-form-ttl text-color-w',
          {
            'ttl-1 ttl-not-r': $mq !== 'mobile',
            'ttl-3': $mq === 'mobile'
          }
        ]"
        text="Let's talk"
      />

      <form class="footer-form ha" action="#">
        <InputElement
          class="footer-form-input input-item-big input-item-d"
          placeholder="Name"
          :required="true"
        />

        <InputElement
          class="footer-form-input input-item-big input-item-d"
          placeholder="E-mail"
          type="email"
          :required="true"
        />

        <Button
          class="footer-form-btn btn-invert"
          element="button"
          text="Get in touch"
          type="submit"
        />
      </form>
    </div>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import InputElement from '~/components/atoms/InputElement'
import Button from '~/components/atoms/Button'

export default {
  components: {
    Title,
    InputElement,
    Button
  }
}
</script>

<style lang="scss" scoped>

.footer-form-wrap {
  flex: 1;
  padding: 25px 0 50px;
}

.footer-form-inner {
  justify-content: center;
}

.footer-form-ttl {
  margin-bottom: 28px;
}

.footer-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: flex-end;
}

.footer-form-input,
.footer-form-btn {
  width: calc(33% - 5px);
}

.footer-form-input {

  &:first-child {
    margin-right: 10px;
  }
}

.footer-form-btn {
  margin-top: 20px;
  margin-left: calc(33% + 5px);
}

@media (min-width: 1025px) and (max-height: 669px) {

  .footer-form-wrap {
    padding: 15px 0 20px;
  }
}

@include tablet {

  .footer-form-wrap {
    padding-bottom: 30px;
  }

  .footer-form-input,
  .footer-form-btn {
    width: calc((100% - 10px) / 2);
  }

  .footer-form-btn  {
    margin-left: calc((100% + 10px) / 2);
  }
}

@include tablet-small {

  .footer-form-wrap {
    padding: 18px 0 50px;
  }

  .footer-form-input,
  .footer-form-btn {
    width: 100%;
  }

  .footer-form-input:first-child {
    margin: 0 0 30px;
  }

  .footer-form-btn {
    margin-left: 0;
  }
}

@include mobile {

  .footer-form-wrap {
    padding: 15px 0 40px;
  }
}
</style>
