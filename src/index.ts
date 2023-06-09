export default class Log {
    static timestampFormat: Object = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };

    static success(msg: string) {
        const date = new Date();
        const now = date.toLocaleTimeString([], Log.timestampFormat);
        console.log(`%c ${now} %c ${String.fromCharCode(187)} %c${msg}`, "color:white; background:green; border-radius:2px", "color:whiite", "color:green")
    }

    static error(msg: string) {
        const date = new Date();
        const now = date.toLocaleTimeString([], Log.timestampFormat);
        console.log(`%c ${now} %c ${String.fromCharCode(187)} %c${msg}`, "color:white; background:red; border-radius:2px", "color:whiite", "color:red")
    }

    static warning(msg: string) {
        const date = new Date();
        const now = date.toLocaleTimeString([], Log.timestampFormat);
        console.log(`%c ${now} %c ${String.fromCharCode(187)} %c${msg}`, "color:black; background:yellow; border-radius:2px", "color:whiite", "color:yellow")
    }

    static info(msg: string) {
        const date = new Date();
        const now = date.toLocaleTimeString([], Log.timestampFormat);
        console.log(`%c ${now} %c ${String.fromCharCode(187)} %c${msg}`, "color:white; background:blue; border-radius:2px", "color:whiite", "color:blue")
    }
}