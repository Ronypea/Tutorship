<template>
  <div id="meetings-list">
    <div v-for="meeting in meetings"
         v-bind:key="meeting._id"
         v-bind:class="['meeting', { active: currentMeetingId === meeting.id}]"
         v-on:click="currentMeetingId=meeting.id">
      <v-card hover>
        <v-card-title>
          <v-icon
            v-if="meeting.status === 'checked'"
            large
            left
            color="green"
          >
            check_circle_outline
          </v-icon>
          <v-icon
            v-else
            large
            left
            color="grey"
          >
            highlight_off
          </v-icon>
          <span class="title font-weight-normal">
                {{ meeting.data }}
              </span>
        </v-card-title>
        <v-card-text v-show="currentMeetingId === meeting.id">
          <b>Статус: </b>{{ meeting.status }}
        </v-card-text>
        <!--<v-card-actions>-->
        <!--<v-list-tile class="grow">-->
        <!--<v-list-tile-content>-->
        <!--<v-list-tile-title><b>Т: </b>{{ point.type }}</v-list-tile-title>-->
        <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
        <!--</v-card-actions>-->
      </v-card>
    </div>
  </div>
</template>

<script>export default {
  name: 'MeetingsList',
  props: {meetings: Array},

  data: function () {
    return {
      currentMeetingId: undefined
    }
  }
}

</script>

<style scoped>
  #point-list {
    margin: 0 15px;
  }

  #point-list .container.fluid {
    padding: 0;
  }

</style>
