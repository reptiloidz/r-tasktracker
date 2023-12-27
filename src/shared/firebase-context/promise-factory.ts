import { database } from '../../app/firebase';

type Request = {
	databaseUrl: string;
};
export const getPromiseFactory = <Krol>(params: Request) => {
	return new Promise<Krol>((resolve, reject) => {
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
