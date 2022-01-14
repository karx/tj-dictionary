<template>
  <FormulateForm v-model="values" :schema="schema" @submit="submitHandler" />
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      values: {},
      schema: [
        {
          component: "h3",
          children: "Quest Creation",
        },
        {
          type: "group",
          name: "general_information",
          label: "General Information",
          children: [
            {
              type: "text",
              name: "title",
              label: "title",
              value: "",
            },
            {
              type: "text",
              name: "desc",
              label: "desc",
              value: "",
            },
            {
              type: "text",
              name: "instructions",
              label: "instructions",
              value: "",
            },
            {
              type: "file",
              name: "image",
              label: "image",
              value: "",
            },
            {
              type: "file",
              name: "video",
              label: "video",
              value: "",
            },
            {
              type: "text",
              name: "who is it for",
              label: "who is it for",
              value: "",
            },
          ],
        },
        {
          type: "group",
          name: "comments",
          label: "Comments",
          repeatable: true,
          children: [
            {
              type: "image",
              name: "avatar",
              label: "Avatar",
              value: "",
            },
            {
              type: "text",
              name: "username",
              label: "username",
              value: "",
            },
            {
              type: "text",
              name: "comment",
              label: "comment",
              value: "",
            },
          ],
        },
        {
          type: "text",
          name: "appearance",
          label: "Appearance",
          value: "",
        },
        {
          type: "group",
          name: "required",
          label: "Required",
          repeatable: true,
          children: [
            {
              type: "text",
              name: "questid",
              label: "questid",
              value: "",
            },
          ],
        },
        {
          type: "group",
          name: "criteria",
          label: "Criteria",
          repeatable: true,
          children: [
            {
              type: "text",
              name: "Completion Rule",
              label: "Completion Rule",
              value: "",
            },
          ],
        },
        {
          type: "group",
          name: "tags",
          label: "Tags",
          repeatable: true,
          children: [
            {
              type: "text",
              name: "tag",
              label: "tag",
              value: "",
            },
          ],
        },
        {
          type: "group",
          name: "results",
          label: "Results",
          repeatable: true,
          children: [
            {
              type: "text",
              name: "after completion rules",
              label: "after completion rules",
              value: "",
            },
          ],
        },
        {
          type: "group",
          name: "milestones",
          label: "Milestones",
          repeatable: true,
          children: [
            {
              type: "text",
              name: "MilestoneId",
              label: "MilestoneId",
              value: "",
            },
          ],
        },
        {
          type: "group",
          name: "seeds_thoughts",
          label: "Seeds Thoughts",
          repeatable: true,
          children: [
            {
              type: "text",
              name: "thoughtid",
              label: "thoughtid",
              value: "",
            },
          ],
        },
        {
          type: "group",
          name: "notifications",
          lame: "Notifications",
          repeatable: true,
          children: [
            {
              type: "text",
              name: "notification",
              label: "notification",
              value: "",
            },
          ],
        },
        {
          type: "submit",
        },
      ],
    };
  },
  methods: {
    async submitHandler(data) {
      axios
        .post("http://localhost:3000/api/v1/quests", { ...data })
        .then((res) => console.log(res))
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
      // await this.$axios.post("/my/api", data);
      console.log({ data });
    },
  },
};
</script>

<style lang="scss">
@import "./snow.scss";
</style>