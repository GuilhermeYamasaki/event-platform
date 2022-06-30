import {logo} from "./logo";

export function header(){
    return(
        <header className="w-full py-28 flex items-center justify-center bg-red-300">
            <logo />
        </header>
    )
}