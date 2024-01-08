import React from "react"

import { VideoSection } from "./components/VideoSection"
import { QuoteSection } from "./components/QuoteSection"
import { MissionSection } from "./components/MissionSection"
import { FooterSection } from "./components/FooterSection"

export const About: React.FC = () => {
	return (
		<React.Fragment>
			<VideoSection />
			<QuoteSection />
			<MissionSection />
			<FooterSection />
		</React.Fragment>
	)
}