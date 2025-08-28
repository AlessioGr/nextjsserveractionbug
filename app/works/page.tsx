import { ClientComponent } from './Repro/ClientComponent'
import { renderServerFn } from './Repro/renderServerFn'



export default function Page() {
  return (
    <div>
      Test Page: <ClientComponent renderServerFn={renderServerFn}/>
    </div>
  )
}

