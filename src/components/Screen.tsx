interface IScreenProps {
    isOpen: boolean;
    exitScreen: any;
}

export const Screen = ({ isOpen, exitScreen }: IScreenProps) => {

    return (
        <div
            onClick={() => {
                exitScreen(false)
            }}
            className={`screen ${isOpen ? "screen-active" : ""}`}
        ></div>
    )
}
