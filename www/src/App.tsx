import { log } from '@bibrary/core'

export const App = () => {
    return (
        <div className='app'>
            <p>Library templateeeeeeee</p>
            <button onClick={() => log('App')}>console.log('App')</button>
        </div>
    )
}
