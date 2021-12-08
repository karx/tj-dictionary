<template>
  <FormulateForm v-model="values" :schema="schema" />
</template>

<script>
export default {
  data() {
    return {
      values: {},
      schema: [
        {
          component: "h3",
          children: "User Creation",
        },
        {
          type: "group",
          name: "Primary Information",
          children: [
            {
              type: "text",
              name: "Username",
              label: "Username",
              value: "",
            },
            {
              type: "text",
              name: "First Name",
              label: "First Name",
              value: "",
            },
            {
              type: "text",
              name: "Last Name",
              label: "Last Name",
              value: "",
            },
            {
              type: "text",
              name: "Email",
              label: "Email",
              value: "",
            },
            {
              type: "text",
              name: "Contact Number",
              label: "Contact Number",
              value: "",
            },
            {
              type: "text",
              name: "Emergency Contact",
              label: "Emergency Contact",
              value: "",
            },
            {
              type: "group",
              repeatable: true,
              name: "addresses",
              addLabel: "+ Address",
              children: [
                {
                  name: "street",
                  label: "Street address",
                },
                {
                  name: "city",
                  label: "City",
                },
                {
                  component: "div",
                  class: "double-row",
                  children: [
                    {
                      name: "state",
                      type: "select",
                      label: "State",
                      options: {
                        va: "Virginia",
                        fl: "Florida",
                        ne: "Nebraska",
                        ca: "California",
                      },
                    },
                    {
                      name: "zip",
                      label: "Zip",
                    },
                  ],
                },
              ],
            },
            {
              type: "file",
              name: "Resume",
              label: "Resume",
            },
          ],
        },
        {
          type: "group",
          name: "Avatar",
          children: [
            {
              type: "image",
              name: "avatar",
              label: "Avatar",
              value: "",
            },
            {
              type: "group",
              repeatable: true,
              name: "Alias",
              addLabel: "+ alias",
              children: [
                {
                  type: "text",
                  name: "alias",
                  value: "",
                },
              ],
            },
            {
              type: "text",
              name: "slogan",
              value: "",
            },
            {
              type: "text",
              name: "Status",
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
};
</script>

<style lang="scss" scoped>
@import "../../../node_modules/@braid/vue-formulate/themes/snow/snow.scss";
.double-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>