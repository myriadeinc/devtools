WORKSPACE_ROOT=$(ROOT)

#VERSION = $(V) 
VERSION = 0.0.1


emerald=$(WORKSPACE_ROOT)/emerald/
diamond=$(WORKSPACE_ROOT)/diamond/
pickaxe=$(WORKSPACE_ROOT)/pickaxe/
sapphire=$(WORKSPACE_ROOT)/sapphire/


build:
	for service in emerald, diamond, pickaxe, sapphire ; do \
		docker build -f ${service}/Dockerfile -t myriade/${service}:alpha-${VERSION} ; \
	done