import * as fileSystem from 'fs';
import Logger from './logger';
import { FileNotFoundError, NotCreateFolderError } from '../types/errors';

export class FileManager {
    private pathFolderToSave: string;
    private pathListRespositories: string;
    constructor(pathListRespositories: string, pathFolderToSave: string) {
        this.pathListRespositories = pathListRespositories;
        this.pathFolderToSave = pathFolderToSave;
    }

    public createFolderForSaveRespositories(): string {
        Logger.log(`Los respositorios clonados se almacenaran en la siguiente ruta: ***${this.pathFolderToSave}***`);

        if (!fileSystem.existsSync(this.pathFolderToSave)) {
            fileSystem.mkdir(this.pathFolderToSave, { recursive: true }, (error) => {
                if (error) {
                    const message = `Error al crear la carpeta: ${error.message}`;
                    Logger.error(message);
                    throw new NotCreateFolderError(message, error);
                }
                Logger.log(`Carpeta creada: ${this.pathFolderToSave}`);
            });
        } else {
            Logger.log(`Carpeta contenerdora existente ${this.pathFolderToSave}`);
        }
        return this.pathFolderToSave;
    }

    public getListOfRespositoriesFromFile(): string[] {
        if (fileSystem.existsSync(this.pathListRespositories)) {
            Logger.log(`Buscando repositorios en el archivo: ***${this.pathListRespositories}***`);
            const data = fileSystem.readFileSync(this.pathListRespositories, { encoding: 'utf-8' });
            const listOfRepositories = data.replace(/\r/g, '').trim().split('\n');
            return listOfRepositories;
        }
        const message = `No existe el archivo con los repositorios ${this.pathListRespositories}`;
        Logger.error(message);
        throw new FileNotFoundError(message);
    }
}
