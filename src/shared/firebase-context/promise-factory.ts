import { database } from '../../app/firebase';

type Request = {
	databaseUrl: string;
};
export const getPromiseFactory = <ReturnType>(params: Request) => {
	return new Promise<ReturnType>((resolve, reject) => {
		database.ref(params.databaseUrl).on('value', snapshot => {
			const boardsData = snapshot.val();

			if (!boardsData) {
				reject({
					method: params.databaseUrl,
					result: boardsData,
				});
			}

			resolve(boardsData);
		});
	});
};
