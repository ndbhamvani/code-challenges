package apitests_test

import (
	"testing"

	. "github.com/onsi/ginkgo/v2"
	. "github.com/onsi/gomega"
)

func TestApitests(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Apitests Suite")
}
