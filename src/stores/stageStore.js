import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useStageStore = defineStore("stage", {
    state: () => ({
        stagesAllStore: [],
        stagesStore: [],
        stageStore: {},
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        stagesAll: (state) => state.stagesAllStore,
        stages: (state) => state.stagesStore,
        stage: (state) => state.stageStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all stages with paginate */
        async getStages() {
            const   token = localStorage.getItem("token");
            let config = {
                method: "get",
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/stages`,
                headers: {
                    Accept: "application/json",
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };
            await axios.request(config)
            .then(response => {
                this.stagesStore = response.data;
            });
        },
        /* get all stages */
        async getStagesAll() {
            await axios.get("/api/stages/all")
            .then(response => {
                this.stagesAllStore = response.data;
            });
        },
        /* get stages page */
        async getStagesPage(page) {
            await axios.get(page)
            .then(response => {
                this.stagesStore = response.data;
            });
        },
        /* get stage */
        async getStage(id) {
            const token = localStorage.getItem("token");
            let config = {
                method: "get",
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/stages/${id}`,
                headers: {
                    Accept: "application/json",
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };
            await axios.request(config)
            .then(response => {
                this.stageStore = response.data;
            });
        },
        /* create stage */
        async createStage(stage) {
            this.errorsStore = [];
            this.messagesStore = [];
            const token = localStorage.getItem("token");
            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/stages`,
                headers: {
                    Accept: "application/json",
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                data: stage,
            };
            await axios.request(config)
            .then(response => {
                this.messagesStore = response.data;
                this.getStages();
                router.push({ name: "StageDashboard" });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* update stage */
        async updateStage(stage) {
            this.errorsStore = [];
            this.messagesStore = [];
            const token = localStorage.getItem("token");
            let config = {  
                method: "put",
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/stages/${stage.id}`,
                headers: {
                    Accept: "application/json",
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                data: stage,
            };
            await axios.request(config)
            .then(response => {
                this.messagesStore = response.data;
                this.getStages();
                router.push({ name: "StageDashboard" });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* delete stage */
        async deleteStage(id) {
            const token = localStorage.getItem("token");
            let config = {
                method: "delete",
                maxBodyLength: Infinity,
                url: `${axios.defaults.baseURL}api/stages/${id}`,
                headers: {
                    Accept: "application/json",
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };
            await axios.request(config)
            .then(response => {
                this.messagesStore = response.data;
                this.getStages();
            });
        },
    },
});