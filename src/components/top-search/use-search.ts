
import { ref, watch } from 'vue'

export default function useSearch (props:any,emit:any){
	const query = ref(props.modelValue)

	watch(query, (newValue) => {
		emit('update:modelValue', newValue)
	})


	return {
		query
	}
}
