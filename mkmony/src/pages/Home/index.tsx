import React from "react"

import { Slider } from "../../components/Slider"
import { AboutIntro } from "../../components/AboutIntro"
import { Skills } from "../../components/Skills"
import { Quote } from "../../components/Quote"

export const Home: React.FC = () => {
	return (
		<React.Fragment>
			<Slider />
			<AboutIntro />
			<Skills />
			<Quote />
		</React.Fragment>
	)
}