import {Input} from "./Input";
import {useFieldArray} from "react-hook-form";
import {Control, UseFormRegister} from "react-hook-form/dist/types/form";
import {Button} from "./Button";
import {CircleOffIcon} from "lucide-react";
import {CrossCircledIcon} from "@radix-ui/react-icons";

export function Params({control, register}: { control: Control<any, any>; register: UseFormRegister<any> }) {
  const {fields, append, remove} = useFieldArray({
    control,
    name: "params",
  });

  return (
    <div className={'flex flex-col space-y-1 w-full'}>
      <div className={'flex justify-start'}>
        <div className={'text-slate-700 text-sm font-semibold text-start'}>Query Params</div>
      </div>
      <div
        id={'make-api-params'}
        className={'border rounded-lg p-2 text-sm flex flex-col space-y-1 h-[250px] overflow-y-auto'}
      >
        <div className={'flex font-semibold space-x-1'}>
          <div className={'w-[140px] text-start'}>Key</div>
          <div className={'flex-1 text-start'}>Value</div>
        </div>

        {fields.map((item, index) => {
          return (
            <div className={'flex font-semibold space-x-1 text-xs'} key={index}>
              <div className={'w-[140px] text-start'}>
                <Input {...register(`params.${index}.key`, {required: false})} className={'py-0'}/>
              </div>
              <div className={'flex-1 text-start'}>
                <Input {...register(`params.${index}.value`, {required: false})} className={'py-0'}/>
              </div>
              <button type="button" onClick={() => remove(index)}>
                <CrossCircledIcon color={'red'}/>
              </button>
            </div>
          );
        })}

        <div
          onClick={() => {
            append({
              key: '',
              value: ''
            });
          }}
          className={'py-1 px-4 flex justify-center font-bold border rounded-lg cursor-pointer'}
        >Add params</div>
      </div>
    </div>
  )
}