import * as LabelPrimitive from "@radix-ui/react-label";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { HTMLAttributes } from "react";
declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(props: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => import("react").JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => import("react/jsx-dev-runtime").JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: import("react-hook-form").FieldError | undefined;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
declare const FormLabel: import("react").ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & import("react").RefAttributes<HTMLLabelElement>, "ref"> & import("react").RefAttributes<HTMLLabelElement>>;
declare const FormControl: import("react").ForwardRefExoticComponent<Omit<import("@radix-ui/react-slot").SlotProps & import("react").RefAttributes<HTMLElement>, "ref"> & import("react").RefAttributes<HTMLElement>>;
declare const FormDescription: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
declare const FormMessage: import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & import("react").RefAttributes<HTMLParagraphElement>>;
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField, };
//# sourceMappingURL=Form.d.ts.map