import * as log4js from 'log4js';
import * as path from 'path';

log4js.configure({
    appenders: {
        myLoggerConsole: { type: 'console' },
        myLoggerInfo: {
            type: 'file',
            filename: path.join(__dirname, '..', '..', 'logs', 'Info.log'),
        },
        myLoggerWarn: {
            type: 'file',
            filename: path.join(__dirname, '..', '..', 'logs', 'Warn.log'),
        },
        myLoggerError: {
            type: 'file',
            filename: path.join(__dirname, '..', '..', 'logs', 'Error.log'),
        },
    },
    categories: {
        default: { appenders: ['myLoggerConsole', 'myLoggerInfo'], level: 'info' },
        warn: { appenders: ['myLoggerWarn'], level: 'warn' },
        error: { appenders: ['myLoggerError'], level: 'error' },
    },
});

export default log4js;
