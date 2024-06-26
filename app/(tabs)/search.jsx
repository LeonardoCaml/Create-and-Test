import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import SearchInput from "../../components/SearchInput"

const Search = () => {
    return (
        <SafeAreaView>
            <SearchInput />
        </SafeAreaView>
    )
}

export default Search