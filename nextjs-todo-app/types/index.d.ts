import { DetailedHTMLProps, HTMLInputTypeAttribute, LabelHTMLAttributes } from "react";

interface InputProps{
    type: string,
    placeholder: string,
    id: string,
    name: String,
    onChanges: ()=>void;
}