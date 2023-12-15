import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";


const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
      logoBox: {
        width: 180,
        height: 180,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: SIZES.large,
      },
      logoImage: {
        width: "100%",
        height: "100%",
        borderRadius: SIZES.large,
      }

});
export default styles;