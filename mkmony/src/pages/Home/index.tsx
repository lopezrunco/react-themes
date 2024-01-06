import React from "react"

import { Slider } from "../../components/Slider"
import { AboutIntro } from "../../components/AboutIntro"
import { Skills } from "../../components/Skills"
import { Quote } from "../../components/Quote"
import { ServicesIntro } from "../../components/ServicesIntro"
import { ProjectsIntro } from "../../components/ProjectsIntro"
import { Numbers } from "../../components/Numbers"
import { Map } from "../../components/Map"

export const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Slider />
			<AboutIntro />
			<Skills />
			<Quote />
			<ServicesIntro items={6} />
			<ProjectsIntro items={3} />
			<Numbers />
			<Map />
		</React.Fragment>
	)
}