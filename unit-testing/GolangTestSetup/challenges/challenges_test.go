package challenges

import (
	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

var _ = Describe("Testing EvenOrOdd", Label("EvenOrOddTest"), func() {

	It("should return \"Odd\" for odd positive numbers", func() {
		Expect(EvenOrOdd(1)).To(Equal("Odd"))
	})

	It("should return \"Even\" for even positive numbers", func() {
		Expect(EvenOrOdd(2)).To(Equal("Even"))
	})

	It("should return \"Odd\" for odd negative numbers", func() {
		Expect(EvenOrOdd(-1)).To(Equal("Odd"))
	})

	It("should return \"Even\" for even negative numbers", func() {
		Expect(EvenOrOdd(-2)).To(Equal("Even"))
	})

	It("should return \"Even\" for zero", func() {
		Expect(EvenOrOdd(0)).To(Equal("Even"))
	})
})
