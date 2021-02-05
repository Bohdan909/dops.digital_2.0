<template>
  <div v-if="getWorkTeam" class="work-description">
    <!-- Head -->
    <div class="work-description-team row">
      <div class="work-description-client col-desktop-5 col-tablet-3 col-mob-10">
        <!-- Title Client -->
        <TextElement
          v-if="getWorkTeam.project"
          class="work-description-ttl text-primary text-color-s"
          :text="getWorkTeam.project"
        />

        <!-- Body Client -->
        <div v-if="getWorkTeam.ClientTeam" class="row col-br-top">
          <div
            v-for="(person, index) in getWorkTeam.ClientTeam"
            :key="index"
            class="col-tablet-10 col-mob-5"
          >
            <PersonTeam
              class="work-description-person"
              :pos="person.ClientPosition"
              :name="person.ClientName"
            />
          </div>
        </div>
      </div>

      <div class="col-desktop-5 col-tablet-7 col-mob-10">
        <!-- Title Dev -->
        <TextElement
          class="work-description-ttl text-primary text-color-s"
          text="Team of project"
        />

        <!-- Body Dev -->
        <div v-if="getWorkTeam.DevTeam" class="row col-br-top col-br-top-end">
          <div
            v-for="(person, index) in getWorkTeam.DevTeam"
            :key="index"
            :class="['col-mob-5', {
              'col-desktop-4 col-tablet-3': (index + 1) % 3 !== 0,
              'col-desktop-2 col-tablet-4': (index + 1) % 3 === 0
            }]"
          >
            <PersonTeam
              class="work-description-person"
              :pos="person.DevPosition"
              :name="person.DevName"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Text -->
    <TextElement
      v-if="getWorkTeam.Text"
      class="work-description-text text-primary"
      :text="getWorkTeam.Text"
    />

    <!-- Buttons -->
    <div class="work-description-bottom">
      <LinkBack
        class="work-description-back"
        to-page="/works"
        text="Back to works"
      />

      <Button
        class="work-description-btn"
        element="nuxt-link"
        text="Start your project"
        to-page="/contact"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TextElement from '~/components/atoms/TextElement'
import PersonTeam from '~/components/atoms/PersonTeam'
import LinkBack from '~/components/atoms/LinkBack'

export default {
  components: {
    TextElement,
    PersonTeam,
    LinkBack
  },

  computed: {
    ...mapGetters({
      getWorkTeam: 'WorkOpen/getWorkTeam'
    })
  }
}
</script>

<style lang="scss" scoped>

.work-description {
  padding: 7px 0 17px;

  @include mobile {
    padding-bottom: 23px;
  }
}

.work-description-ttl {
  padding-bottom: 8px;
}

.work-description-team {
  padding-bottom: 115px;

  @include tablet-small {
    padding-bottom: 123px;
  }
}

.work-description-client {
  @include mobile {
    margin-bottom: 50px;
  }
}

.work-description-person {
  margin-top: 33px;
}

.work-description-text {
  padding-bottom: 286px;
  width: 260px;

  @include tablet {
    padding-bottom: 190px;
  }

  @include tablet-small {
    padding-bottom: 135px;
  }

  @include mobile {
    padding-bottom: 50px;
  }
}

.work-description-bottom {
  display: flex;
  justify-content: space-between;

  @include mobile {
    flex-wrap: wrap;
  }
}

.work-description-back {
  align-self: flex-end;
  padding-bottom: 5px;

  @include mobile {
    order: 1;
  }
}

.work-description-btn {
  width: 260px;

  @include mobile {
    width: 100%;
    order: 0;
    margin-bottom: 50px;
  }
}
</style>
