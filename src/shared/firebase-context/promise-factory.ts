import { database } from '../../app/firebase';

type Request = {
	databaseUrl: string;
};
export const getPromiseFactory = (params: Request) => {
	return new Promise((resolve, reject) => {
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
