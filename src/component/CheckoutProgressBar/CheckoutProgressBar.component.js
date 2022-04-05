import React from "react";

class CheckoutProgressBar extends React.Component {
	render() {
		const { steps, currentStep } = this.props;
		const stepsToRender = Object.entries(steps).slice(0, -1);
		const stepsEntries = Object.entries(steps);
		const currentStepIndex = stepsEntries.findIndex((step) => step[0] === currentStep);
		let percentage =
			currentStepIndex !== stepsToRender.length
				? 30 + currentStepIndex * (40 / (stepsToRender.length - 1))
				: 100;
		return (
			<div block="Checkout" elem="ProgressBar">
				<div block="Checkout" elem="ProgressBarOuter">
					<div
						block="Checkout"
						elem="ProgressBarInner"
						style={{ transition: "width 2s", width: `${percentage}%` }}
					></div>
					<div block="Checkout" elem="ProgressBarSteps">
						{stepsToRender.map((step, index) => {
							return (
								<div block="Checkout" elem="ProgressBarStepContainer">
									<div class="stepIndexContainer">
										<div
											class={`stepIndex ${
												currentStepIndex >= index ? "activeStepIndex" : ""
											}`}
										>
											{index >= currentStepIndex ? index + 1 : "✓"}
										</div>
									</div>
									<div
										key={step[1].title}
										className={step[0] === currentStep ? "activeStep" : ""}
									>
										{step[1].title}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default CheckoutProgressBar;
