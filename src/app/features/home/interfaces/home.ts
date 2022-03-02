import { Button } from "./button";

export interface Home{
    welcome: {
        title: string;
        subtitle: string;
        description: string;
        button1: Button;
        button2: Button;
    }
}