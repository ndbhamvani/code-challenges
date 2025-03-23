package apitests

import (
	"net/http"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

var _ = Describe("Rest API Test", Label("RestAPITest"), func() {
	It("should return a successful response", func() {
		client := &http.Client{}
		resp, err := client.Get("https://jsonplaceholder.typicode.com/todos/1")
		Expect(err).NotTo(HaveOccurred())
		Expect(resp.StatusCode).To(Equal(http.StatusOK))
		//fmt.Print(resp)
	})
})
