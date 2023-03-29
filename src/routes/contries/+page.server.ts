import { supabase } from '$lib/supabase/supabaseClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	await parent();
	const { data } = await supabase.from('countries').select();
	return {
		countries: data ?? []
	};
};
