import SortableTable from '@/components/sortable-table';
import { Suspense } from 'react';

export default function Index() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SortableTable />
		</Suspense>
	);
}
