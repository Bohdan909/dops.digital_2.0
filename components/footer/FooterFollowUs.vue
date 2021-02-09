<template>
  <div class="footer-follow-us col-br-top col-br-top-end col-br-d row">
    <!-- Title -->
    <div class="off-tablet-2 col-ttl col-tablet-8 col-mob-10">
      <Title
        element="h3"
        text="Follow us"
        :class="[
          'text-color-w',
          {
            'ttl-1 ttl-not-r': $mq !== 'mobile',
            'ttl-3': $mq === 'mobile'
          }
        ]"
      />
    </div>

    <!-- Social -->
    <div
      v-for="(item, index) in socialList"
      :key="index"
      :class="[
        'col-social col-desktop-1 col-tablet-2 col-mob-5 ha',
        {
          'off-tablet-s-2': index === 0,
          'off-tablet-2': index === 0 || index === 3,
          'off-tablet-s-reset': index === 3
        }
      ]"
    >
      <FooterSocial
        :name="item.name"
        :link="item.link"
        :followers="item.followers"
      />
    </div>
  </div>
</template>

<script>
import socialList from '~/static/socialData'

import Title from '~/components/atoms/Title'
import FooterSocial from '~/components/footer/FooterSocial'

export default {
  components: {
    Title,
    FooterSocial
  },

  data () {
    return {
      socialList
    }
  }
}
</script>

<style lang="scss" scoped>

.footer-follow-us {
  padding: 65px 0 60px;
}

.ttl-1 {
  margin-bottom: 70px;
}

@include macbook {

  .footer-follow-us {
    padding-bottom: 33px;
  }
}

@media (max-width: 1024px) and (min-height: 961px) and (min-height: 850px) {

  .footer-follow-us {
    flex: 1;
    // padding: 125px 0 100px;
  }
}

@media (min-width: 768px) {

  @media (max-height: 669px) {

    .footer-follow-us {
      padding: 35px 0 30px;
    }

    .ttl-1 {
      margin-bottom: 30px;
    }
  }

  @media (max-height: 550px) {

    .ttl-1 {
      margin-bottom: 10px;
    }
  }
}

@media (min-width: 991px) and (max-width: 1024px) {

  .col-social:not(:last-child) {
    width: 135px;
    flex-basis: 135px;
  }

  .col-social:last-child {
    flex-basis: auto;
  }

  .col-ttl {
    align-self: flex-end;
  }
}

@media (min-width: 961px) and (max-width: 990px) {

  .col-social:not(:last-child) {
    width: 120px;
    flex-basis: 120px;
  }

  .col-social:last-child {
    flex-basis: auto;
  }
}

@media (min-width: 951px) and (max-width: 960px) {

  .col-social:last-child {
    width: 120px;
  }
}

@include tablet-small {

  .footer-follow-us {
    padding: 22px 0 9px;
  }

  .ttl-1 {
    margin-bottom: 28px;
  }

  .footer-social {
    margin-bottom: 35px;
  }

  @media (min-height: 890px) {

    .footer-follow-us {
      padding: 65px 0 45px;
    }
  }
}

@include mobile {

  .footer-follow-us {
    padding-bottom: 15px;
  }

  .footer-social {
    margin: 38px 0 0;
  }
}
</style>
