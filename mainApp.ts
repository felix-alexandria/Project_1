import { Application } from "express";

export const mainApp = async (app:Application) => {
    try {
        // Default routes
        app.use("/")
        
    } catch (error) {
    console.log("Error loading default route")
    }
}