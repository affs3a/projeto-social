import { Mark } from "@/components/common/Typing"
import { Break } from "../components/common/Typing"
import { Div } from "@/style/tags"


class Utils {
    makeMessage(target) {
        if (target.isArray) {
            return <> {
                target.map((text, key) => (
                    <Div key={key}>
                        <Break />{text}
                    </Div>
                ))
            } </>
        } else if (typeof target == 'object' && !target.isArray) {
            const [keys, values] = Object.entries(target)
            return <> {
                keys.forEach((item, key) => (
                    <Div key={key}>
                        <Mark>{item}</Mark>: {values[key]}
                    </Div>
                ))
            } </>
        } else {
            return target
        }
    }
}

export default new Utils()