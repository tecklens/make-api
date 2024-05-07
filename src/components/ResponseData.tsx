import {AxiosResponse} from "axios";
import locale from "../lib/ajrm-en";
import JSONInput from "react-json-editor-ajrm";
import {HttpStatusText} from "../constants/HttpStatusText";
import get from 'lodash.get'

export function ResponseData({data, theme}: { data: AxiosResponse | null; theme: 'dark' | 'light' | undefined | string; }) {
  return (
    <div className={'flex flex-col mt-2 max-w-[100%]'}>
      <div className={'inline-flex justify-between space-x-2'}>
        <div className={`text-sm font-semibold`}>Response</div>
        {data ?
          <div className={'inline-flex text-sm'}>
            <div className={'inline-flex space-x-1'}>
              <div>Status:</div>
              <div className={'text-green-500'}>{data.status} {get(HttpStatusText, data.status)}</div>
            </div>
          </div>
          : null
        }
      </div>
      {data ?
        <div className={'w-full border rounded-lg mt-1 overflow-hidden'}>
          <JSONInput
            id='api-response'
            placeholder={data.data}
            theme={theme === 'dark' ? 'light_mitsuketa_tribute' : 'dark_vscode_tribute'}
            // colors={darktheme}
            locale={locale}
            height='250px'
            width={'100%'}
            viewOnly={true}
            onChange={(e: any, val: any) => {
              console.log(e, val)
            }}
          />
        </div>
        : null
      }
    </div>
  )
}