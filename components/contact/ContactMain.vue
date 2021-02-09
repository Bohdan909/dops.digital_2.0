<template>
  <div class="contact-main">
    <!-- Title And Clock -->
    <div class="contact-ttl">
      <div class="row">
        <div class="col-desktop-4 off-desktop-2 col-mob-5">
          <Title
            element="h1"
            class="ttl-1"
            text="Contact"
          />
        </div>
        <div class="col-desktop-4 col-mob-5">
          <Time />
        </div>
      </div>
    </div>

    <!-- Contact Items -->
    <div class="row">
      <div
        v-for="(item, index) in contactData"
        :key="index"
        :class="['contact-col col-desktop-3 col-tablet-s-4 ffo-tablet-s-1 ffo-desktop-reset col-mob-10',
                 {
                   'off-desktop-2': (index + 1) % 2 !== 0,
                   'off-desktop-1': (index + 1) % 2 === 0
                 }
        ]"
      >
        <ContactItem :contact-object="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ContactItem from '~/components/contact/ContactItem'
import Title from '~/components/atoms/Title'
import Time from '~/components/contact/Time'

export default {
  components: {
    ContactItem,
    Title,
    Time
  },

  data () {
    return {
      contactData: [
        {
          title: 'Work with us',
          avatar: require('~/assets/images/avatar-andriy.jpg'),
          name: 'Andriy Dopilko',
          pos: 'CEO',
          mail: 'andrew@dops.digital'
        },
        {
          title: 'Work with us',
          avatar: require('~/assets/images/avatar-liza.jpg'),
          name: 'Liza Bilovus',
          pos: 'Business Developer',
          mail: 'liza@dops.digital'
        },
        {
          title: 'Work for us',
          avatar: require('~/assets/images/avatar-deniel.jpg'),
          name: 'Daniel Korenowskyi',
          pos: 'Co-Founder & Design Director',
          mail: 'daniel@dops.digital'
        },
        {
          title: 'Write about us',
          avatar: require('~/assets/images/avatar-dasha.jpg'),
          name: 'Dasha Korotkyh',
          pos: 'PR Manager',
          mail: 'dasha@dops.digital'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.contact-main {
  position: relative;
  padding-top: 49px;
}

.contact-col {

  &:nth-child(1), &:nth-child(2) {
    margin-bottom: 390px;
  }
}

.contact-ttl {
  position: absolute;
  top: 310px;
  left: 0;
  right: 0;
}

@include tablet-small {

  .contact-ttl {
    position: static;
    margin-bottom: 35px;
  }

  .contact-col {
    margin-bottom: 31px;

    &:nth-child(1), &:nth-child(2) {
      margin-bottom: 31px;
    }
  }
}

@include mobile {

  .contact-main {
    padding-top: 73px;
  }

  .contact-ttl {
    margin-bottom: 44px;
  }

  .contact-col {
    margin-bottom: 45px;

    &:nth-child(1), &:nth-child(2) {
      margin-bottom: 45px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
