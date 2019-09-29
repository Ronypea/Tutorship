<template>
  <v-dialog width="500px" v-model="dialog">
    <v-btn outline large slot="activator">Создание новой встречи</v-btn>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Создание новой встречи</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-form style="margin-top: 2rem">
          <v-container fluid>
            <v-layout>
              <v-flex xs12 md12 дп12>
                <v-select :items="children.child" label="С кем хотите встретиться?" solo>
                </v-select>
                <v-card-title> Когда хотите встретиться?</v-card-title>
                <v-layout wrap>
                  <div style="align-content: center">
                    <v-date-picker v-model="picker"></v-date-picker>
                  </div>
                  <v-divider></v-divider>
                  <v-layout row>
                    <v-flex xs12>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click="close()">Отмена</v-btn>
                        <v-btn class="success" flat @click="onSave($refs)">Сохранить</v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>import Service from '../../../services/Service'

export default {
  name: 'ModalCreateMeeting',
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      meeting: {
        date: '',
        mentor_id: '2',
        child_id: '4',
        curator_id: '3'
      },
      children: {},
      props_child: {mentor_id: '2'},
      dialog: false
    }
  },
  methods: {
    async GetChildren() {
      const response_child = await Service.getChildren(this.props_child)
      this.children = response_child.data[0]
      console.log('CHILDREN')
      console.log(this.children)
    },
    async onSave(date) {
      await Service.createMeeting({
        date: date,
        curator_id: this.meeting.curator_id,
        mentor_id: this.meeting.mentor_id,
        child_id: this.meeting.child_id
      })
      this.$emit('meeting-created')
      this.dialog = false
      this.$emit('close')
    },
    close() {
      this.dialog = false
      this.$emit('close')
    }
  },
  mounted() {
    this.GetChildren()
  }
}
</script>

<style scoped>

</style>
