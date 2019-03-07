export * from './ActionButton'


export interface FormActionComps<T>{
    value: T
    id: string,
    readonly:boolean,
    onChange: (e: { target: { value: T } }) => void
    onAdvancedChange: (prop: string, value: any) => void
    [optionsProp:string]:any
}

export interface ActionButtonComps<T>{
    value: T
    disabled?: boolean,
    onClick?: (props?: any) => void
    uiOptions?:any
}