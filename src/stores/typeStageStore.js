import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useTypeStageStore = defineStore("typeStages", {
  state: () => ({
    typeStagesAllStore: [],
    typeStagesStore: [],
    typeStageStore: {},
    errorsStore: [],
    messagesStore: [],
  }),
  getters: {
    typeStagesAll: (state) => state.typeStagesAllStore,
    typeStages: (state) => state.typeStagesStore,
    typeStage: (state) => state.typeStageStore,
    errors: (state) => state.errorsStore,
    messages: (state) => state.messagesStore,
  },
  actions: {
    /* get all typeStages with paginate */
    async getTypeStages() {
      const token = localStorage.getItem("token");
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/typeStages`,
        headers: {
          Accept: "application/json",
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      await axios.request(config)
      .then((response) => {
        this.typeStagesStore = response.data;
      });
    },

    /* get all typeStages */
    async getTypeStagesAll() {
      await axios.get("/api/typeStages/all").then((response) => {
        this.typeStagesAllStore = response.data;
      });
    },
    /* get typeStage */
    async getTypeStage(id) {
      const token = localStorage.getItem("token");
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/typeStages/${id}`,
        headers: {
          Accept: "application/json",
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };  
      await axios.request(config)
        .then((response) => {
        this.typeStageStore = response.data;
      });
    },
    /* get typeStages page */
    async getTypeStagesPage(page) {
      await axios.get(page).then((response) => {
        this.typeStagesStore = response.data;
      });
    },
    /* create typeStage */
    async createTypeStage(req) {
      this.errorsStore = [];
      this.messagesStore = [];
      const token = localStorage.getItem("token");
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/typeStages`, 
        headers: {
          Accept: "application/json",
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: req,
      };
      await axios.request(config)
        .then((response) => {
          this.messagesStore = response.data.message;
          this.getTypeStages();
          router.push({ name: "TypeStageDashboard" });
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    /* update typeStage */
    async updateTypeStage(req) {
      this.errorsStore = [];
      this.messagesStore = [];
      const token = localStorage.getItem("token");
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/typeStages/${req.id}`,
        headers: {  
          Accept: "application/json",
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: req,
      };
      await axios.request(config)
        .then((response) => {
          this.messagesStore = response.data;
          this.getTypeStages();
          router.push({ name: "TypeStageDashboard" });
        })
        .catch((error) => {
          this.errorsStore = error.response.data.errors;
        });
    },
    /* delete typeStage */
    async deleteTypeStage(id) {
      this.errorsStore = [];
      this.messagesStore = [];
      const token = localStorage.getItem("token");
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `${axios.defaults.baseURL}api/typeStages/${id}`,
        headers: {
          Accept: "application/json",
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      await axios.request(config)
        .then((response) => {
        this.messagesStore = response.data;
        this.getTypeStages();
      });
    },
  },
});
