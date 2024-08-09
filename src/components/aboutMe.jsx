
export function AboutMe() {
    return (
        <section className="w-full md:py-24 lg:px-56 bg-muted">
            <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                <div className="relative overflow-hidden rounded-lg shadow-lg m-">
                    <img
                        src="/placeholder.svg"
                        alt="Aleff "
                        width={300}
                        height={300}
                        className="object-cover w-2/3 h-2/3 "
                        style={{ aspectRatio: "300/300", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/50 text-white">
                        <div className="space-y-2">
                            <h2 className="text-2xl md:text-3xl font-bold">Aleff </h2>
                            <p className="text-muted-foreground">Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">About Me</h3>
                    <p className="text-muted-foreground">
                        Hi, I'm Aleff .
                    </p>
                    <div>
                        <h4 className="text-lg font-bold">Interests & Hobbies</h4>
                        <ul className="grid gap-2 text-muted-foreground">
                            <li>
                                <div className="flex items-center gap-2">
                                    <span>Painting</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-2">

                                    <span>Reading</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-2">
                                    <span>Hiking</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center gap-2">
                                    <span>Cycling</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}