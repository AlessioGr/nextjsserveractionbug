import { ClientComponent } from './Repro/ClientComponent'
import { renderServerFn } from './Repro/renderServerFn'



export const Page = async () => {
  return (
    <div>
      Test Page: <ClientComponent renderServerFn={renderServerFn}/>
    </div>
  )
}

export default Page